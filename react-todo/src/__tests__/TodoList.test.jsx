import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

test("renders the TodoList component", () => {
  render(<TodoList />);
  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Add todo");
  const button = screen.getByText("Add");
  fireEvent.change(input, { target: { value: "Test Todo" } });
  fireEvent.click(button);
  expect(screen.getByText("Test Todo")).toBeInTheDocument();
});

test("toggles a todo item", () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");
  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo item", () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText("Delete")[0];
  fireEvent.click(deleteButton);
  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
