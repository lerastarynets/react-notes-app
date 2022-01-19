import s from "../NotesTable/NotesTable.module.css";
import { useState, useEffect } from "react";

const Note = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [content, setContent] = useState(props.note.content);
  let [name, setName] = useState(props.note.name);
  let [category, setCategory] = useState(props.note.category);

  useEffect(() => {
    setName(props.note.name);
    setCategory(props.note.category);
    setContent(props.note.content);
    props.updateCategories();
  }, [props.note.name, props.note.content, props.note.category]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.setName(props.note.id, name);
    props.setCategory(props.note.id, category);
    props.setContent(props.note.id, content);
  };
  const onNoteDelete = () => {
    props.deleteNote(props.note.id);
  };
  const onNoteArchieve = () => {
    props.archieveNote(props.note.id);
  };
  const onNoteUnarchieve = () => {
    props.unarchieveNote(props.note.id);
  };
  const onNameChange = (e) => {
    setName(e.currentTarget.value);
  };
  const onCategoryChange = (e) => {
    setCategory(e.currentTarget.value);
  };
  const onContentChange = (e) => {
    setContent(e.currentTarget.value);
  };

  return (
    <div>
      {/* //If edit mode is switched off */}
      {!editMode && (
        <div className={s.noteContainer}>
          <div className={s.noteItem}>{props.note.name}</div>
          <div className={s.noteItem}>{props.note.created}</div>
          <div className={s.noteItem}>{props.note.category}</div>
          <div className={s.noteItem}>{props.note.content}</div>
          {props.date ? (
            <div className={s.noteItem}>{props.date}</div>
          ) : (
            <div className={s.noteItem}></div>
          )}
          {props.isArchieve ? (
            <div className={s.noteButtons}>
              <div>
                <button onClick={onNoteUnarchieve}>Unarchieve</button>
              </div>
            </div>
          ) : (
            <div className={s.noteButtons}>
              <div>
                <button onClick={activateEditMode}>Edit</button>
              </div>
              <div>
                <button onClick={onNoteArchieve}>Archieve</button>
              </div>
              <div>
                <button onClick={onNoteDelete}>Delete</button>
              </div>
            </div>
          )}
        </div>
      )}
      {/* If edit mode is switched on */}
      {editMode && (
        <div className={s.noteContainer}>
          <input className={s.noteItem} onChange={onNameChange} value={name} />
          <div className={s.noteItem}>{props.note.created}</div>
          <div className={s.noteItem + " " + s.noteCategoryItem}>
            <label>
              <input type="radio" value={"Task"} onChange={onCategoryChange} />
              Task
            </label>
            <label>
              <input type="radio" value={"Idea"} onChange={onCategoryChange} />
              Idea
            </label>
            <label>
              <input
                type="radio"
                value={"Random thought"}
                onChange={onCategoryChange}
              />
              Random thought
            </label>
          </div>
          <input
            className={s.noteItem}
            onChange={onContentChange}
            value={content}
          />

          {props.date ? (
            <div className={s.noteItem}>{props.date}</div>
          ) : (
            <div className={s.noteItem}></div>
          )}

          <div className={s.noteButtons}>
            <button onClick={deactivateEditMode}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Note;
