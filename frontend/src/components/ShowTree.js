import GraphUI from './GraphUI';

const ShowTree = () => (
    <div>
        <GraphUI
            graph_path="/data/graph/graph"
            question_set_path="/data/questions/sequential"
        />
    </div>
);

export default ShowTree;
