import GraphUI from './GraphUI';

const ShowTree = () => (
    <div>
        <GraphUI
            graph_path="/data/graph/graph"
            // question_set_path="/data/questions/sequential"
            question_set_path="http://localhost:8001/questionario/api/questionario"
        />
    </div>
);

export default ShowTree;
