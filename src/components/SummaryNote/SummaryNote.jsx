import s from "../Summary/Summary.module.css";

const SummaryNote = (props) => {
  return (
    <div>
      <div className={s.noteContainer}>
        <div className={s.noteItem}>{props.note.category}</div>
        <div className={s.noteItem}>{props.note.active}</div>
        <div className={s.noteItem}>{props.note.archieved}</div>
      </div>
    </div>
  );
};

export default SummaryNote;
