const calculateCredit = (price, credit) => {
  if (credit == 'false')
    return (
      <small>
        <span style={{ fontWeight: 'bold' }}>Á vista</span>
      </small>
    );

  const parcels = price > 500 ? 12 : 6;
  return (
    <small>
      <span style={{ fontWeight: 'bold' }}>{parcels}x</span> de{' '}
      <span style={{ fontWeight: 'bold' }}>
        {(price / parcels).toFixed(2)}
      </span>{' '}
      no cartão
    </small>
  );
};

export default calculateCredit