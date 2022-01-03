const RecipeList = ({ title }) => {
  console.log("image:", title.image);
  return (
    <div className="List">
      <table className="Table mdc-card mdc-card mdc-card--outlined">
        <tr>
          <td>Name: {title.title}</td>
        </tr>
        <tr>
          <td>Ingredient: {title.ingredient}</td>
        </tr>
        <tr>
          <td>Cooking Time: {title.time} Minutes</td>
        </tr>
        <tr>
          <td>food Image-Link: {title.image}</td>
        </tr>
      </table>
    </div>
  );
};

export default RecipeList;
