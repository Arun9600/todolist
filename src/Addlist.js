const Addlist = ({ newlist, setNewList, submitHandler }) => {
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={newlist}
          id="add-new"
          onChange={(e) => setNewList(e.target.value)}
          placeholder="Add New"
          required
        />
        <button>Add New</button>
      </form>
    </>
  );
};

export default Addlist;
