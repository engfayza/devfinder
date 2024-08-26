export default function Info({info, logo}) {
  console.log(info);
  return (
    <div style={!info ? {opacity: 0.5} : {}} className="info-box">
      <img src={logo} alt="Logo" className="light" />
      <p className="info">
        <a href={info}>{info || 'Not Available'}</a>
      </p>
    </div>
  );
}
