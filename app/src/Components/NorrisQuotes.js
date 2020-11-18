import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { FetchQuote } from "../Actions/FetchQuote";

const NorrisQuotes = (props) => {
  useEffect(() => {
    props.FetchQuote();
  }, []);

  return (
    <div>
      <h1>NORRIS FACTS...</h1>
      {props.isFetching && (
        <Loader type="Puff" color="red" height={100} width={100} />
      )}
      {props.quote && <h3>{props.quote}</h3>}
      {props.error && <p className="error">{props.error}</p>}
      <button onClick={props.FetchQuote}>Another Fact!</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    quote: state.quotes.quote,
    isFetching: state.quotes.isFetching,
    error: state.quotes.error,
  };
};

export default connect(mapStateToProps, { FetchQuote })(NorrisQuotes);
