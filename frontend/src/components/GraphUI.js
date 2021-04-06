import React, { useEffect, useState } from 'react';
import DecisionTree from 'question-tree-core';

const GraphUI = ({
    graph_path,
    question_set_path,
    intro_text = "Inicie aqui seu diagnostico. Click em 'Proximo' para começar",
}) => {
    const [decisionTreeInitializing, setDecisionTreeInitializing] = useState();
    const [decisionTreeInitialized, setDecisionTreeInitialized] = useState();
    const [currentQuestion, setCurrentQuestion] = useState();
    const [currentAnswerId, setCurrentAnswerId] = useState();
    const [correctResponses, setCorrectResponses] = useState([]);
    const [inCorrectResponses, setInCorrectResponses] = useState([]);
    const [isFinalModule, setIsFinalModule] = useState();

    useEffect(() => {
        if (!decisionTreeInitializing) {
            const p = DecisionTree.fetch({ graph_path, question_set_path });
            setDecisionTreeInitializing(true);
            if (p) {
                p.then(setDecisionTreeInitialized);
            }
        }
    }, [graph_path, question_set_path, decisionTreeInitializing]);

    useEffect(() => {
        if (decisionTreeInitialized) {
            console.log('GraphUI question-tree graph files fetched.');
        }
    }, [decisionTreeInitialized]);

    useEffect(() => {
        if (currentQuestion && currentQuestion.module === 'module_final') {
            setIsFinalModule(true);
        } else {
            setIsFinalModule(false);
        }
    }, [currentQuestion]);

    const displayNextBtn =
        !currentQuestion || (currentQuestion && currentAnswerId);

    const updateResponses = (responses, setResponses, siblingResponses) => {
        if (!responses.some((item) => item.id === currentQuestion.id)) {
            const responsesCopy = [...responses];
            const userResponse = Object.assign(currentQuestion, {
                answerId: currentAnswerId,
            });
            responsesCopy.push(userResponse);
            setResponses(responsesCopy);
        }

        const idx = siblingResponses.findIndex(
            (item) => item.id === currentQuestion.id
        );
        if (idx >= 0) {
            siblingResponses.splice(idx, 1);
        }
    };

    const handleNextClick = () => {
        if (currentAnswerId) {
            if (
                currentAnswerId === (currentQuestion && currentQuestion.actual)
            ) {
                updateResponses(
                    correctResponses,
                    setCorrectResponses,
                    inCorrectResponses
                );
            } else {
                updateResponses(
                    inCorrectResponses,
                    setInCorrectResponses,
                    correctResponses
                );
            }
        }

        setCurrentQuestion(DecisionTree.next({ labelIdx: currentAnswerId }));

        setCurrentAnswerId();
    };
    const handlePrevClick = () => setCurrentQuestion(DecisionTree.prev());
    const handleInputChange = (e) => setCurrentAnswerId(e.target.id);

    return (
        <div className="graph-ui">
            {/* <h4>Working Example</h4> */}
            {!currentQuestion && (
                <div style={{ padding: '.5rem' }}>{intro_text}</div>
            )}
            {currentQuestion && (
                <div style={{ padding: '.5rem' }}>
                    <p>
                        <em>Question ID:</em> "{currentQuestion.id}"
                    </p>
                    <p>
                        <em>Module ID:</em> "{currentQuestion.module}"
                    </p>
                    <p>
                        <em>Graph Position:</em>{' '}
                        {currentQuestion.position.current} of{' '}
                        {currentQuestion.position.total} nodes
                    </p>
                    <hr></hr>
                    <p className="title-questions">{currentQuestion.title}</p>

                    {currentQuestion.labels &&
                        currentQuestion.labels.map((item) => (
                            <label key={item.qid} className="options-questions">
                                <input
                                    type="radio"
                                    id={item.qid}
                                    name="quiz-example"
                                    onChange={handleInputChange}
                                />
                                {item.title}
                            </label>
                        ))}

                    {isFinalModule && (
                        <div
                            style={{ marginBottom: '1rem', marginTop: '1rem' }}
                        >
                            You got <b>{correctResponses.length}</b> out of{' '}
                            <b>
                                {correctResponses.length +
                                    inCorrectResponses.length}
                            </b>{' '}
                            questions correct.
                        </div>
                    )}
                </div>
            )}
            <div className="container-btn">
                <button
                    className="btn-question"
                    onClick={handlePrevClick}
                    disabled={!DecisionTree.hasPreviousQuestion()}
                >
                    Anterior
                </button>
                <button
                    className="btn-question"
                    onClick={handleNextClick}
                    disabled={!displayNextBtn}
                >
                    Proximo
                </button>
            </div>
        </div>
    );
};

export default GraphUI;
