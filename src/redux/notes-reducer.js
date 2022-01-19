import {
  updateObjectInArray,
  changeIdInAllObjectsInArray,
  takeObjectFromArrayAndChangeProps,
  findQuantityOfObjsMatchingConditionsInArray,
} from "../utils/objectHelpers";

const CREATE_NOTE = "CREATE_NOTE";
const DELETE_NOTE = "DELETE_NOTE";
const ARCHIEVE_NOTE = "ARCHIEVE_NOTE";
const UNARCHIEVE_NOTE = "UNARCHIEVE_NOTE";
const SET_CONTENT = "SET_CONTENT";
const SET_NAME = "SET_NAME";
const SET_CATEGORY = "SET_CATEGORY";
const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";

const initialState = {
  notes: [
    {
      id: 0,
      name: "Shopping list",
      created: "1/14/2022",
      category: "Task",
      content: "cheese, oil",
    },
    {
      id: 1,
      name: "Evolution theory",
      created: "1/14/2022",
      category: "Idea",
      content: "How was our population created?",
    },
    {
      id: 2,
      name: "Test task",
      created: "1/14/2022",
      category: "Task",
      content: "create 3 apps until 24/01/2022",
    },

    {
      id: 3,
      name: "Cat",
      created: "1/14/2022",
      category: "Task",
      content: "give him some chicken",
    },
  ],
  archieve: [
    {
      id: 0,
      name: "New year",
      created: "1/14/2022",
      category: "Random thought",
      content: "let's make an afterparty on Monday 17/01/2022",
    },
    {
      id: 1,
      name: "How?",
      created: "1/14/2022",
      category: "Idea",
      content: "how did I manage to do that",
    },
    {
      id: 2,
      name: "Whatever",
      created: "1/14/2022",
      category: "Random thought",
      content: "I realy wanna order some sushi",
    },
  ],
  isArchieve: true,
  categories: [
    { category: "Task", active: 2, archieved: 0 },
    {
      ategory: "Idea",
      active: 1,
      archieved: 1,
    },
    {
      ategory: "Random thought",
      active: 0,
      archieved: 2,
    },
  ],
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NOTE: {
      let newN = {
        id: state.notes.length,
        name: "New note",
        created: new Date().toLocaleDateString(),
        category: "Random thought",
        content: "",
      };
      return {
        ...state,
        notes: [...state.notes, newN],
      };
    }
    case DELETE_NOTE: {
      return {
        ...state,
        notes: state.notes.filter((note) => {
          return note.id !== action.id;
        }),
      };
    }
    case ARCHIEVE_NOTE: {
      let temp = takeObjectFromArrayAndChangeProps(
        state.notes,
        action.id,
        "id",
        {
          id: state.archieve.length,
        }
      );
      let newNotesArray = state.notes.filter((note) => {
        return note.id !== action.id;
      });
      return {
        ...state,
        archieve: [...state.archieve, temp],
        notes: changeIdInAllObjectsInArray(newNotesArray, "id"),
      };
    }
    case UNARCHIEVE_NOTE: {
      let temp = takeObjectFromArrayAndChangeProps(
        state.archieve,
        action.id,
        "id",
        {
          id: state.notes.length,
        }
      );
      let newArchieveArray = state.archieve.filter((note) => {
        return note.id !== action.id;
      });
      return {
        ...state,
        notes: [...state.notes, temp],
        archieve: changeIdInAllObjectsInArray(newArchieveArray, "id"),
      };
    }
    case SET_NAME: {
      return {
        ...state,
        notes: updateObjectInArray(state.notes, action.id, "id", {
          name: action.name,
        }),
      };
    }
    case SET_CONTENT: {
      return {
        ...state,
        notes: updateObjectInArray(state.notes, action.id, "id", {
          content: action.content,
        }),
      };
    }
    case SET_CATEGORY: {
      return {
        ...state,
        notes: updateObjectInArray(state.notes, action.id, "id", {
          category: action.category,
        }),
      };
    }
    case UPDATE_CATEGORIES: {
      let actTasks = findQuantityOfObjsMatchingConditionsInArray(
        state.notes,
        "category",
        "Task"
      );
      let archTasks = findQuantityOfObjsMatchingConditionsInArray(
        state.archieve,
        "category",
        "Task"
      );
      let actRanTh = findQuantityOfObjsMatchingConditionsInArray(
        state.notes,
        "category",
        "Random thought"
      );
      let archRanTh = findQuantityOfObjsMatchingConditionsInArray(
        state.archieve,
        "category",
        "Random thought"
      );
      let actIdea = findQuantityOfObjsMatchingConditionsInArray(
        state.notes,
        "category",
        "Idea"
      );
      let archIdea = findQuantityOfObjsMatchingConditionsInArray(
        state.archieve,
        "category",
        "Idea"
      );
      let newCategoriesObj = [
        {
          category: "Task",
          active: actTasks,
          archieved: archTasks,
        },
        {
          category: "Idea",
          active: actIdea,
          archieved: archIdea,
        },
        {
          category: "Random thought",
          active: actRanTh,
          archieved: archRanTh,
        },
      ];
      return {
        ...state,
        categories: [...newCategoriesObj],
      };
    }
    default:
      return state;
  }
};

export const deleteNoteA = (id) => {
  return { type: DELETE_NOTE, id };
};
export const archieveNoteA = (id) => {
  return { type: ARCHIEVE_NOTE, id };
};
export const unarchieveNoteA = (id) => {
  return { type: UNARCHIEVE_NOTE, id };
};
export const createNoteA = () => {
  return { type: CREATE_NOTE };
};
export const setNameA = (id, name) => {
  return { type: SET_NAME, id, name };
};
export const setContentA = (id, content) => {
  return { type: SET_CONTENT, id, content };
};
export const setCategoryA = (id, category) => {
  debugger;
  return { type: SET_CATEGORY, id, category };
};
export const updateCategoriesA = () => {
  return { type: UPDATE_CATEGORIES };
};

export default notesReducer;
