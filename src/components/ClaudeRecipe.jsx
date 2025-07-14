import Markdown from 'react-markdown';

const ClaudeRecipe = (props) => {

  return (
    <section className='suggested-recipe-container' aria-live="polite">
      <h2>Suggested Recipe</h2>
      <Markdown>{props.recipe}</Markdown>
    </section>
  )
}

export default ClaudeRecipe