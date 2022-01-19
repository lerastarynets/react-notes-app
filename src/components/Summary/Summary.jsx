import { connect } from "react-redux";
import SummaryNote from "../SummaryNote/SummaryNote";
import s from "./Summary.module.css";

const Summary = (props) => {
  return (
    <div>
      <div>
        <div className={s.headerContainer}>
          <div className={s.headerItem}>Note Category</div>
          <div className={s.headerItem}>Active</div>
          <div className={s.headerItem}>Archieved</div>
        </div>
        {props.categories.map((c, idx) => {
          return <SummaryNote key={idx} note={c} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

export default connect(mapStateToProps, {})(Summary);
