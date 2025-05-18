const calculateCredit = (price, credit) => {
  if (credit == 'false')
    return (
      <small>
        <span style={{ fontWeight: 'bold' }}>Cash only</span>
      </small>
    );

  const parcels = price > 500 ? 12 : 6;
  return (
    <small>
      <span style={{ fontWeight: 'bold' }}>{parcels}x</span> of{' '}
      <span style={{ fontWeight: 'bold' }}>
        {(price / parcels).toFixed(2)}
      </span>{' '}
      on card
    </small>
  );
};

export default calculateCredit