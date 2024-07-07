export default function Add({ add_type }) {
  return (
    <div className="form-group">
      <p>{add_type} Name: </p>
      <input type="text"></input>
      <button>Add</button>
    </div>
  );
}
