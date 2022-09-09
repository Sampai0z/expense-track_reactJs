import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  // let expensesContent = <p>No expenses found :D</p>
  // if (props.items.length > 0) {
  //   expensesContent = filteredExpenses.map((expense) => (
  //       <ExpenseItem
  //         key={expense.id}
  //         title={expense.title}
  //         amount={expense.amount}
  //         date={expense.date}
  //       />
  //     ))
  //   };
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;

//  {/* {filteredExpenses.length === 0 && <p>No expenses Found.</p>}
//       {filteredExpenses.length > 0 && filteredExpenses.map((expense) => {
//           return (
//             <ExpenseItem
//               key={expense.id}
//               title={expense.title}
//               amount={expense.amount}
//               date={expense.date}
//             />
//           );
//         })} */}

//       {/* {props.items.map((expense) => { */}

//       {/* {props.items.map((expense) => (
//           <ExpenseItem
//             title={expense.title}
//             amount={expense.amount}
//             date={expense.date}
//           />
//         ))} */}

//       {/* <ExpenseItem
//         title={props.items[0].title}
//         amount={props.items[0].amount}
//         date={props.items[0].date}
//       /> */}
