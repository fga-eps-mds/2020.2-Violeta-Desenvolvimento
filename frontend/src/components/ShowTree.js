import GraphUI from './GraphUI';
import { urlGen } from './urls';

const url = urlGen('questionario', 'getQuestionario/.json');

const ShowTree = () => (
    <div>
        <GraphUI graph_path="/data/graph/graph" question_set_path={url} />
    </div>
);

export default ShowTree;
