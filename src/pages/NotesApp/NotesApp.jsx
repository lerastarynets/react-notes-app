import ActiveNotes from "../../components/ActiveNotes/ActiveNotes";
import Summary from "../../components/Summary/Summary";
import s from "./NotesApp.module.css";

const NotesApp = () => {
  return (
    <div className={s.notesAppContainer}>
      <ActiveNotes />
      <Summary />
    </div>
  );
};
export default NotesApp;
