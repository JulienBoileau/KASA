import "./_Host.css";

function LogementHost({ host }) {
    
    const hostSplitName = host.name.split(" ");
    const [name, lastname] = hostSplitName;

  return (
    
    <div className="host_container">
      
      <div className="host">
        <p>{name}</p>
        <p>{lastname}</p>
      </div>

      <img src={host.picture} alt="" className="host_picture" />
    
    </div>
  );
}

export default LogementHost;