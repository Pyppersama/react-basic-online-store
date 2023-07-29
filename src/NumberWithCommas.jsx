export const NumberWithCommas = ({ number }) => {
    const formattedNumber = number.toLocaleString();
    return <span>{formattedNumber}</span>;
  };
