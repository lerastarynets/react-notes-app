import { connect } from "react-redux";
import {
  createNoteA,
  deleteNoteA,
  archieveNoteA,
  setContentA,
  setNameA,
  setCategoryA,
  updateCategoriesA,
} from "../../redux/notes-reducer";
import NotesTable from "../NotesTable/NotesTable";

const ActiveNotes = (props) => {
  return (
    <div>
      <NotesTable {...props} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    categories: state.categories,
  };
};

export default connect(mapStateToProps, {
  createNoteA,
  setContentA,
  setNameA,
  setCategoryA,
  deleteNoteA,
  archieveNoteA,
  updateCategoriesA,
})(ActiveNotes);
