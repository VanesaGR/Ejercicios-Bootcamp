
const Link = (props) => {
  return (
    <a title={props.title} 
    className={props.className}
    href={props.href}
     target={props.openInNewTab ? '_blank' : '_self'} 
      rel={props.openInNewTab ? 'noopener noreferrer' : ''} >
        Blog
      </a>
  )
};

export default Link;


