const Person = ({image, name, age, id, onRemove}) => {
  return (
    <article className='person'>
      <img src={image} alt={name} className='img' />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
        <button 
        onClick={() => onRemove(id)} 
        className="btn"
        style={{marginTop: '12px'}}
        >
          Remove
        </button>
      </div>
    </article>
  );
};
export default Person;