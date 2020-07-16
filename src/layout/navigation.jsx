const React = require('react');

function NavItem({ isActive, children }) {
  return (
    <li>
      <button className={`navigation-option ${isActive ? 'navigation-option--active' : ''}`}>
        {children}
      </button>
    </li>
  )
}

module.exports = function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation-grid">
        <NavItem isActive>Character</NavItem>
        <NavItem>Feats and Abilities</NavItem>
        <NavItem>Equipment</NavItem>
        <NavItem>Spells</NavItem>
        <NavItem>Options</NavItem>
      </ul>
    </nav>
  );
}