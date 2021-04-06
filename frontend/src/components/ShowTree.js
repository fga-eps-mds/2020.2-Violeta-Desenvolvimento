import GraphUI from './GraphUI';

const ShowTree = () => {
    const introText =
        "Inicie aqui seu diagnostico. Click em 'next' para começar";
    return (
        <div>
            <GraphUI
                graph_path="/data/graph/graph"
                question_set_path="/data/questions/sequential"
                intro_text={introText}
            />
        </div>
    );
};

export default ShowTree;
