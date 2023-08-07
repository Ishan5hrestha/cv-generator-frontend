import { QuestionWrapper } from "../Wrappers/QuestionWrapper";
import { useState, useEffect } from "react";
import Select from '../Wrappers/Select';
import Button from '../Wrappers/Button';
import MultiSelect from "../Common/MultiSelect";
import { toSentenceCase } from '../../utils';
import Input from '../Wrappers/Input'

export default function Form({ questions, setQuestions }) {
  let [currentQuestionIdx, setcurrentQuestionIdx] = useState(1);
  let [currentAnswer, setCurrentAnswer] = useState("");
  let [currentSection, setCurrentSection] = useState("basicInfo");
  let [lastEvent, setLastEvent] = useState("");

  useEffect(() => {
    // Change current questionIndex to the first question of current section
    // as soon as current section changes
    if(lastEvent == "next") {
      let firstQuestionIdx = findFirstQuestionIdx();
      setcurrentQuestionIdx(firstQuestionIdx || currentQuestionIdx);
    } else if (lastEvent == "prev") {
      let lastQuestionIdx = findLastQuestionIndex();
      setcurrentQuestionIdx(lastQuestionIdx || currentQuestionIdx);
    }
  }, [currentSection]);

  const handleNext = () => {
    let lastQuestionIndex = findLastQuestionIndex();
    if (currentQuestionIdx < lastQuestionIndex) {
      setcurrentQuestionIdx(currentQuestionIdx + 1);
    } else {
      let nextSection = findNextSection();
      setCurrentSection(nextSection);
    }
    setLastEvent("next");
  };

  const findPrevSection = () => {
    let sections = Object.keys(questions);
    let currentSectionIndex = sections.findIndex(
      (section) => section === currentSection
    );
    let prevSection = sections[currentSectionIndex - 1];
    return prevSection;
  };


  const findNextSection = () => {
    let sections = Object.keys(questions);
    let currentSectionIndex = sections.findIndex(
      (section) => section === currentSection
    );
    let nextSection = sections[currentSectionIndex + 1];
    return nextSection;
  };

  const findFirstQuestionIdx = () => {
    return Math.min(
      ...questions[currentSection]["questions"].map((q) => q.index)
    );
  };

  const findLastQuestionIndex = () => {
    return Math.max(
      ...questions[currentSection]["questions"].map((q) => q.index)
    );
  };

  const handlePrev = (e) => {
    let firstQuestionIndex = findFirstQuestionIdx();
    if (currentQuestionIdx > firstQuestionIndex) {
      setcurrentQuestionIdx(currentQuestionIdx - 1);
    } else {
      let prevSection = findPrevSection();
      setCurrentSection(prevSection);
    }
    setLastEvent("prev");
  };

  const handleContinue = (e) => {
    e.preventDefault();
    let updatedQuestions = JSON.parse(JSON.stringify(questions));
    let currentQuesArrIndex = questions[currentSection]["questions"].findIndex(
      (q) => q.index === currentQuestionIdx
    );

    updatedQuestions[currentSection]["questions"][currentQuesArrIndex][
      "answer"
    ] = currentAnswer;
    console.log("updatedQuestions", updatedQuestions);
    // Update DB
    // Fetch DB and set questions state
    setQuestions(updatedQuestions);
    handleNext();
  };

  const handleInputChange = (e) => {
    setCurrentAnswer(e.target.value);
  };

  const handleSelectChange = (options) => {
    setCurrentAnswer(options.join(',').trim());
  }
  
  return (
    <>
      <h1>Form</h1>
      <form>
        <h3>{toSentenceCase(currentSection)}</h3>
        {/* Basic Info */}
        {
          Object.keys(questions)?.map(section => {
            return questions[section].questions?.map((question) => (
              <QuestionWrapper
                currentQuestionIdx={currentQuestionIdx}
                questionIdx={question.index}
                key={question.index}
              >
                <div>
                  <label> {question.question} </label>
                </div>
                {
                  question.type === 'text' &&
                  <Input
                    type="text"
                    name={question.index}
                    onBlur={handleInputChange}
                    defaultValue={question.answer}
                  />
                }
    
                {
                  question.type === 'boolean' &&
                  <Input
                    type="radio"
                    // name={question.index}
                    // onChange={handleInputChange}
                    // defaultValue={question.answer}
                  />
                }
    
                {
                  question.type === 'select' &&
                  <Select
                    mode="multiple"
                    placeholder="Inserted are removed"
                    // value={selectedItems}
                    onChange={handleSelectChange}
                    style={{
                      width: '100%',
                    }}
                    options={question.options.split(',').map((item) => ({
                      value: item,
                      label: item,
                    }))}
                  />
                }
    
                {
                  question.type === 'textSelect' &&
                    <MultiSelect 
                      questions={questions}
                      currentSection={currentSection}
                      currentQuestionIdx={currentQuestionIdx}
                      setQuestions={setQuestions}
                      handleSelectChange={handleSelectChange}
                      question={question}
                    />
                } 
                <div>
                  <Button
                    onClick={(e) => handleContinue(e)}
                    // disabled={!currentAnswer}
                  >
                    Continue
                  </Button>
                </div>
              </QuestionWrapper>
            ))
          })
        }
      </form>
      <div>
        <Button onClick={handlePrev} disabled={currentQuestionIdx<=1}>Previous</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
    </>
  );
}
