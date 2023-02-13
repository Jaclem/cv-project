export default function Aside(props) {
  return (
    <aside className="aside">
      { props.index === 0 && 
      <>
        <p className="aside--title">Experience</p>
        <hr></hr>
      </>}
      <h3>{props.position}</h3>
      <div className="aside--date-flex">
        <p>
          {props.from} - {props.to}
        </p>
        <h4>{props.company}</h4>
      </div>
    </aside>
  );
}
