import './App.css';
import { useTodos } from './useTodos';
import List from '../Components/List';
import Item from '../Components/Item';
import Form from '../Components/Form';
import Buttons from '../Components/Buttons';
import Modal from '../Components/Modal';
import Error from '../Components/Error';
import Loading from '../Components/Loading';
import Empty from '../Components/Empty';
import Header from '../Components/Header';
import Counter from '../Components/Counter';
import Search from '../Components/Search';

function App() {

  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();

  return (
    <>
      
      <Header loading={loading}>
          <Counter 
            totalTodos = {totalTodos}
            completedTodos = {completedTodos}
          />

          <Search 
            searchValue = { searchValue }
            setSearchValue = { setSearchValue }
          />
      </Header>

      <List
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <Error />}
        onLoading={() => <Loading />}
        onEmptyTodos={() => <Empty />}
        onEmptySearchedResults={
          (searchText) => <p>No hay resultados para {searchText}</p>
        }
        render={todo => (
          <Item
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleted={() => completeTodo(todo.text)}
            onDeleted={() => deleteTodo(todo.text)}
          />
        )}
      />

      {openModal && (
        <Modal>
          <Form
            addTodo = {addTodo}
            setOpenModal = {setOpenModal}
          />
        </Modal>
      )}

      <Buttons 
        setOpenModal={setOpenModal}
      />   

    </>
  );
}

export default App;