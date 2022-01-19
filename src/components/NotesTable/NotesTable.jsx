import Note from "../Note/Note";
import s from "./NotesTable.module.css";
import { NavLink } from "react-router-dom";

const NotesTable = (props) => {
  return (
    <div className={s.notesTable}>
      <div>
        <div className={s.headerContainer}>
          <div className={s.headerItem}>Name</div>
          <div className={s.headerItem}>Created</div>
          <div className={s.headerItem}>Category</div>
          <div className={s.headerItem}>Content</div>
          <div className={s.headerItem}>Dates</div>
          <div className={s.headerItem}>Settings</div>
        </div>
        {props.notes.map((n, idx) => {
          let date = n.content.match(
            /(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g
          );
          if (props.isArchieve) {
            return (
              <Note
                key={idx}
                note={n}
                date={date}
                isArchieve={props.isArchieve}
                unarchieveNote={props.unarchieveNoteA}
                updateCategories={props.updateCategoriesA}
              />
            );
          }
          return (
            <Note
              key={idx}
              note={n}
              date={date}
              deleteNote={props.deleteNoteA}
              archieveNote={props.archieveNoteA}
              setContent={props.setContentA}
              setName={props.setNameA}
              setCategory={props.setCategoryA}
              updateCategories={props.updateCategoriesA}
            />
          );
        })}
      </div>
      {props.isArchieve ? (
        <div>
          <NavLink className={s.archieveBtn} to={"/notes"}>
            Back to active notes
          </NavLink>
        </div>
      ) : (
        <div className={s.bottomBtnBlock}>
          <div>
            <button className={s.createBtn} onClick={props.createNoteA}>
              Create note
            </button>
          </div>
          <div>
            <NavLink className={s.archieveBtn} to={"/archieve"}>
              Archieved notes
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotesTable;
