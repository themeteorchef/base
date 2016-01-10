NavBarNav = React.createClass({
  renderDropdown( item, index ) {
    let active = item.active ? 'dropdown active' : '';
    return <li key={ `nav-item-${ item.uid }` } className={ active }>
      <a href={ item.href } className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
        { item.label } <span className="caret"></span>
      </a>
      <DropdownMenu items={ item.dropdownItems } />
    </li>;
  },
  renderItem( item, index ) {
    let active = item.active ? 'active' : '';
    return <li key={ `nav-item-${ item.uid }` } className={ active }>
      <a href={ item.href }>{ item.label }</a>
    </li>;
  },
  render() {
    let classes = this.props.position ? `nav navbar-nav ${ this.props.position }` : 'nav navbar-nav';
    return <ul className={ classes }>
      {this.props.items.map( ( item, index ) => {
        item.active = FlowRouter.getRouteName() === item.uid;
        return item.dropdown ? this.renderDropdown( item, index ) : this.renderItem( item, index );
      })}
    </ul>;
  }
});
