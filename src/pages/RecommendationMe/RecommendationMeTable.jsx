
const RecommendationMeTable = ({ recommend, idx }) => {

    const {_id, product_name, recommendation_title, recommendedProduct_image, recommendedProduct_name } = recommend;

    
  
    return (
        <tr className=" bg-base-200 border-b-2 border-[#c9c2c2]">
            <th>{idx}</th>
            <th></th>
            <td>{product_name}</td>
            <td>{recommendation_title}</td>
            <td><img className="ml-20 w-32 h-24" src={recommendedProduct_image} alt="" /></td>
            <td>{recommendedProduct_name}</td>
            
        </tr>

    );
};

export default RecommendationMeTable;