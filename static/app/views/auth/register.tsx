import one from '../../../../assests/svg/company_logo_name.svg';
function Register() {
  return (
    <div
        style={{
          padding: '5px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img src={one} style={{width:'200px', padding:'15px'}}/>
        <small>show your signup ui here.... </small>
        </div>
  );
}

export default Register;