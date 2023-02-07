// import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ handleChangeInput }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        placeholder="filter name"
        onChange={handleChangeInput}
      />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  handleChangeInput: PropTypes.func,
};
