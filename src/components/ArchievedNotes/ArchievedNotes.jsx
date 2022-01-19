import { connect } from "react-redux";
import { unarchieveNoteA, updateCategoriesA } from "../../redux/notes-reducer";
import NotesTable from "../NotesTable/NotesTable";

const ArchievedNotes = (props) => {
  return (
    <div>
      <NotesTable {...props} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    notes: state.archieve,
    isArchieve: state.isArchieve,
  };
};

export default connect(mapStateToProps, {
  unarchieveNoteA,
  updateCategoriesA,
})(ArchievedNotes);
