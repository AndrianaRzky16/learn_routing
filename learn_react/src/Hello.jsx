import PropTypes from "prop-types";

export default function Hello(props) {
  return <h1>Hello {props.name}!</h1>;
}

Hello.propTypes = {
  name: PropTypes.string.isRequired,
};
