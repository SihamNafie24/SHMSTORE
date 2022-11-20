import React from "react";
import styles from "./UserModal.module.css";
import Input from "../Form/Input";
import ButtonPrimarySmall from "../Button/ButtonPrimarySmall";
import ButtonSecondarySmall from "../Button/ButtonSecondarySmall";
import axios from "axios";
import imgLoad from "../../img/icons/photo-icon.svg";

const camposInput = [
  {
    id: "name",
    label: "Nome",
    type: "text",
  },
  {
    id: "price",
    label: "Preço",
    type: "text",
  },
  {
    id: "image",
    label: "Imagem",
    type: "text",
  },
  {
    id: "credit",
    titulo: "Parcelamento",
    type: "radio",
    options: [{ sim: true }, { não: false }],
  },
  {
    id: "tag",
    titulo: "Tag",
    type: "radio",
    options: [
      { acessórios: "acessórios" },
      { consoles: "consoles" },
      { games: "games" },
    ],
  },
  {
    id: "description",
    type: "textarea",
    label: "Descrição",
  },
];

function UserModal({ produto, fechar, sellerId }) {
  const [form, setForm] = React.useState(
    camposInput.reduce((acc, campo) => {
      return {
        ...acc,
        [campo.id]: "",
      };
    }, {})
  );

  const [erro, setErro] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [statusPUT, setStatusPUT] = React.useState(null);
  const [statusDELETE, setStatusDELETE] = React.useState(null);
  const [statusPOST, setStatusPOST] = React.useState(null);
  const [modalBlock, setModalBlock] = React.useState(false);

  const imageRef = React.useRef();

  function handleClick({ target }) {
    switch (target.innerText) {
      case "Enviar":
        if (
          form.name !== "" &&
          form.price !== "" &&
          form.image !== "" &&
          form.description !== "" &&
          form.credit !== "" &&
          form.tag !== ""
        ) {
          setModalBlock(!modalBlock);
          const fetchApi = async (url, obj) => {
            try {
              setLoading(true);
              const { status } = await axios.put(url, obj);
              setStatusPUT(status);
            } catch (erro) {
              setErro("Erro");
              console.log(erro);
            } finally {
              setLoading(false);
              setTimeout(() => {
                fechar();
              }, 2800);
            }
          };

          fetchApi(
            `https://fake-server-company.herokuapp.com/products/update/${produto.id}`,
            form
          );
        }
        break;

      case "Excluir":
        setLoading(true);

        const fetchApi = async (url) => {
          try {
            const { status } = await axios.delete(url);
            setStatusDELETE(status);
            console.log(status);
          } catch (erro) {
            setErro("Erro");
            console.log(erro);
          } finally {
            setLoading(false);
            setModalBlock(!modalBlock);
            setTimeout(() => {
              fechar();
            }, 2800);
          }
        };

        fetchApi(
          `https://fake-server-company.herokuapp.com/products/delete/${produto.id}`
        );
        break;
      case "Cadastrar":
        if (
          form.name !== "" &&
          form.price !== "" &&
          form.image !== "" &&
          form.description !== "" &&
          form.credit !== "" &&
          form.tag !== ""
        ) {
          setModalBlock(!modalBlock);
          const fetchApi = async (url, obj) => {
            try {
              setLoading(true);
              const { status } = await axios.post(url, obj);
              setStatusPOST(status);
              console.log(status);
            } catch (erro) {
              setErro("Erro");
              console.log(erro);
            } finally {
              setLoading(false);
              setTimeout(() => {
                fechar();
              }, 2800);
            }
          };

          fetchApi(
            `https://fake-server-company.herokuapp.com/products/create`,
            form
          );
        }
        break;
    }
  }

  React.useEffect(() => {
    if (produto) {
      setForm({ ...form, ...produto });
    }
  }, []);

  React.useEffect(() => {
    if (!produto && sellerId) {
      setForm({ ...form, sellerId });
    }
  }, []);

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function handleLoadImage(e) {
    e.preventDefault();
    imageRef.current.style.backgroundImage = `url(${form.image})`;
  }

  return (
    <div className={styles.background}>
      {modalBlock ? <div className={styles.block}></div> : <></>}
      <div className={`${styles.modal} comeFromBottom`}>
        <div
          ref={imageRef}
          style={{
            backgroundImage: produto
              ? `url(${produto.image})`
              : `url(${imgLoad})`,
          }}
          className={styles.img}
        ></div>

        <div className={styles.info}>
          <form className={styles.form}>
            {camposInput.map((campo) => {
              switch (campo.type) {
                case "text":
                  return (
                    <div
                      key={campo.id}
                      id={campo.id + "Div"}
                      className={styles.inputsContainer}
                    >
                      <label htmlFor={campo.id}>{campo.label}</label>
                      <div className={styles.inputs}>
                        <input
                          autoComplete="off"
                          type={campo.type}
                          id={campo.id}
                          value={form[campo.id]}
                          onChange={handleChange}
                        />
                        {campo.id === "image" && (
                          <ButtonSecondarySmall
                            text="Carregar"
                            onClick={handleLoadImage}
                          />
                        )}
                      </div>
                    </div>
                  );
                case "radio":
                  return (
                    <div key={campo.id}>
                      <p className={styles.pLabel}>{campo.titulo}</p>
                      {campo.options.map((option) => {
                        return (
                          <label
                            className={styles.opcao}
                            key={Object.keys(option)}
                          >
                            <input
                              type={campo.type}
                              id={campo.id}
                              name={campo.id}
                              value={Object.values(option)}
                              checked={form[campo.id] == Object.values(option)}
                              onChange={handleChange}
                            />
                            {Object.keys(option)}
                          </label>
                        );
                      })}
                    </div>
                  );
                case "textarea":
                  return (
                    <div key={campo.id} className={styles.inputsContainer}>
                      <label htmlFor={campo.id}>{campo.label}</label>
                      <textarea
                        rows="4"
                        id={campo.id}
                        value={form[campo.id]}
                        onChange={handleChange}
                      />
                    </div>
                  );
              }
            })}
          </form>
          {statusPUT && statusPUT === 200 && (
            <p className={styles.message}>Produto alterado com sucesso.</p>
          )}
          {statusDELETE && statusDELETE === 200 && (
            <p className={styles.message}>Produto excluido com sucesso.</p>
          )}
          {statusPOST && statusPOST !== 201 && (
            <p className={styles.message}>Produto criado com sucesso.</p>
          )}

          {loading && <p className={styles.message}>Carregando...</p>}
          {statusPOST && statusPOST === 201 && (
            <p className={styles.message}>Produto criado com sucesso.</p>
          )}
          <div className={styles.btns}>
            <ButtonPrimarySmall
              text={produto ? "Enviar" : "Cadastrar"}
              onClick={handleClick}
            />
            <div className={styles.btnsEC}>
              {produto && (
                <ButtonPrimarySmall text="Excluir" onClick={handleClick} />
              )}
              <ButtonSecondarySmall text="Cancelar" onClick={fechar} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserModal;
