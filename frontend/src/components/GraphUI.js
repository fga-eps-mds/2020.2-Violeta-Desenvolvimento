import React, { useEffect, useState } from 'react';
import DecisionTree from 'question-tree-core';
import PopupQuest from './PopupQuest';
import { ReactComponent as FeedbackAsset } from '../images/popup-feedback-person.svg';
import { ReactComponent as CloseQuiz } from '../images/closequiz.svg';
import ProfissionaisQuiz from './ProfissionaisQuiz';
import ContatosQuiz from './ContatosQuiz';

const GraphUI = ({
    graph_path,
    question_set_path,
    intro_text = "Inicie aqui seu diagnostico. Clique em 'Próximo' para começar",
}) => {
    const [decisionTreeInitializing, setDecisionTreeInitializing] = useState();
    const [decisionTreeInitialized, setDecisionTreeInitialized] = useState();
    const [currentQuestion, setCurrentQuestion] = useState();
    const [currentAnswerId, setCurrentAnswerId] = useState();
    const [correctResponses, setCorrectResponses] = useState([]);
    const [inCorrectResponses, setInCorrectResponses] = useState([]);
    const [isFinalModule, setIsFinalModule] = useState();
    const [buttonPopup, setButtonPopup] = useState(true);
    const [resposta, setResposta] = useState([]);
    const [respostaSize, setRespostaSize] = useState();

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
        if (!responses.some((...item) => item.id === currentQuestion.id)) {
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

    const saveAnwser = () => {
        if (currentQuestion.resultado !== undefined) {
            const anwser = resposta;
            anwser.push(currentQuestion.resultado);
            setResposta(anwser);
            console.log(resposta);
            setRespostaSize(resposta.length);
            console.log(respostaSize);
        }
    };

    const resetAll = () => {
        setDecisionTreeInitializing();
        setDecisionTreeInitialized();
        setCurrentQuestion();
        setCurrentAnswerId();
        setCorrectResponses([]);
        setInCorrectResponses([]);
        setIsFinalModule();
        setButtonPopup(true);
        setResposta([]);
        setRespostaSize();
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
                <div id="intro-questionarios">{intro_text}</div>
            )}

            {currentQuestion && (
                <div className="container-graph">
                    {/* <p>
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
                    <hr></hr> */}
                    <h1 id="title-questions">{currentQuestion.title}</h1>
                    {currentQuestion.labels &&
                        currentQuestion.labels.map((item) => (
                            <label
                                key={item.qid}
                                className="options-questions"
                                onChange={saveAnwser}
                            >
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
                            {/* You got <b>{correctResponses.length}</b> out of{' '}
                            <b>
                                {correctResponses.length +
                                    inCorrectResponses.length}
                            </b>{' '}
                            questions correct. */}
                            <PopupQuest
                                trigger={buttonPopup}
                                setTrigger={setButtonPopup}
                            >
                                <button
                                    className="btnq-popup"
                                    onClick={() => {
                                        setButtonPopup(false);
                                        resetAll();
                                    }}
                                >
                                    <CloseQuiz className="Close-Quiz" />
                                </button>
                                {resposta.length === 0 ? (
                                    <div id="notAnswer-Container">
                                        <h1 id="title-popup-feedback">
                                            Suas resposta não levaram a nenhum
                                            caso.
                                        </h1>
                                    </div>
                                ) : (
                                    <div>
                                        <h1 id="title-popup-feedback">
                                            Você não está sozinha!
                                        </h1>

                                        <div id="first-side-feedback">
                                            <p className="text-quote">
                                                Você está sofrendo um caso de
                                                Violência
                                                {resposta.map((item, i) =>
                                                    i === respostaSize - 1 ? (
                                                        <span
                                                            key={item}
                                                            className="destaqueViolencia"
                                                        >
                                                            {item}.
                                                        </span>
                                                    ) : (
                                                        <span
                                                            key={item}
                                                            className="destaqueViolencia"
                                                        >
                                                            {item},
                                                        </span>
                                                    )
                                                )}
                                            </p>

                                            <p className="text-simple">
                                                O seu caso terá um melhor
                                                direcionamento com as seguintes
                                                instituições:
                                            </p>
                                            <ProfissionaisQuiz />
                                            <p className="text-quote">
                                                Indicamos fortemente um
                                                acompanhamento psicológico por
                                                conta dos ocorridos <br /> e é
                                                de extrema importância para seus
                                                futuros caminhos.{' '}
                                            </p>
                                            <p className="text-simple">
                                                Entre em contato com os
                                                profissionais abaixo:
                                            </p>
                                            <ContatosQuiz />
                                        </div>
                                    </div>
                                )}
                                <FeedbackAsset id="Feedback-Asset" />
                            </PopupQuest>
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
