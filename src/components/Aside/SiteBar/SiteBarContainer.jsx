import React from "react";
import {connect} from "react-redux";
import SiteBar from "./SiteBar";

const mapStateToProps = (state) => {
    return {
        sidebar:state.sidebar
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const SiteBarContainer = connect(mapStateToProps, mapDispatchToProps)(SiteBar);
export default SiteBarContainer;