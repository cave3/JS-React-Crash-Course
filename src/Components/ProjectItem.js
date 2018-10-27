import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {
  deleteProject(id) {
    this.props.onDelete(id);
  }
  render() {
    //console.log(this.props);
    return (
      <li className="Project">
        <strong>{this.props.project.title}</strong>: {this.props.project.category}
        <input type="submit" value="X" onClick={this.deleteProject.bind(this, this.props.project.id)} />
      </li>
    );
  }
}

ProjectItem.propTypes = {
  projects: PropTypes.object,
  onDelete: PropTypes.func
}

export default ProjectItem;
