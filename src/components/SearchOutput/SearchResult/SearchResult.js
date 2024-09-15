import React from "react";
import classes from './SearchResult.module.css';

const SearchResult = (props) => {
    console.log(props);
    return (
<article className={classes.Result}>
    <h1>id: {props.id}</h1>
    <h2>type: {props.type}<h2>
    <h3>attributes: {props.attributes}<h3>
    <a href={props.link} rel="noopener noreferrer" target="_blank">{props.link}</a>
</article>
    );
}

export default SearchResult;
