DropdownMenu = React.createClass({
  renderDivider() {
    return <li role="separator" className="divider"></li>;
  },
  renderItem( item, index ) {
    let active = item.active ? 'active' : '';
    return <li key={ `nav-item-${ item.uid }` } className={ active } onClick={ item.action }>
      <a href={ item.href }>{ item.label }</a>
    </li>;
  },
  render() {
    return <ul className="dropdown-menu">
      {this.props.items.map( ( item, index ) => {
        return item.divider ? this.renderDivider( item, index ) : this.renderItem( item, index );
      })}
    </ul>;
  }
});
