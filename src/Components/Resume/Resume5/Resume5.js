import { Avatar, Col, Row, Space, Spin, Tag } from "antd";
import { useLanguage } from "../../../context/Language";
import UpdateQuestion from "../../Common/UpdateQuestion";
import UpdateQuestionWrapper from "../../Wrappers/UpdateQuestionWrapper";
import "./Resume5.css";
import { SectionHeading } from "../../Wrappers/SectionHeading";
import UpdateSection from "../../Common/UpdateSection";
import UpdateSectionWrapper from "../../Wrappers/UpdateSectionWrapper";
import UpdateItemWrapper from "../../Wrappers/UpdateItemWrapper";
import UpdateItem from "../../Common/UpdateItem";
import { SubSectionHeading } from "../../Wrappers/SubSectionHeading";
import CircleDevider from "../../Common/Dividers/CircleDivider";
import {
  CheckCircleOutlined,
  GlobalOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import LangRating from "../../Common/LangRating/LangRating";
import ArrowDown from "../../Common/Dividers/ArrowDown";

export default function Resume2({
  questions,
  setQuestions,
  activeColor,
  groupedExperience,
  groupedEducation,
  groupedProject,
  isProfileAILoading,
  setIsProfileAILoading,
  isWorkAILoading,
  setIsWorkAILoading,
}) {
  const { language: lang, t } = useLanguage();
  const pictureWrapperStyle = {
    width: "fit-content",
  };
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Lato:400,300,700"
        rel="stylesheet"
        type="text/css"
      />
      <div className="resume-container d-block">
        <div className="header5 d-flex">
          <div className="col1">
            <div className="picture" style={{ marginRight: "20px" }}>
              {/* Picture */}
              <UpdateQuestionWrapper
                className="picture"
                display={"block"}
                style={pictureWrapperStyle}
                removed={
                  questions?.basicInfo?.questions.find((q) => q.index === 5)
                    ?.removed
                }
              >
                <UpdateQuestion
                  key={JSON.stringify(questions)}
                  section="basicInfo"
                  index={5}
                  title="Edit Picture"
                  questions={questions}
                  setQuestions={setQuestions}
                />
                <Avatar
                  shape="square"
                  size={120}
                  icon={<UserOutlined />}
                  src={
                    questions?.basicInfo?.questions.find((q) => q.index === 5)
                      ?.answer
                  }
                />
              </UpdateQuestionWrapper>
            </div>
            <div className="full-name">
              {/* First Name */}
              <span className="first-name">
                <UpdateQuestionWrapper className="first-name">
                  <UpdateQuestion
                    key={JSON.stringify(questions)}
                    section="basicInfo"
                    index={1}
                    title="Edit First Name"
                    questions={questions}
                    setQuestions={setQuestions}
                  />
                  {questions?.basicInfo?.questions.find((q) => q.index === 1)
                    ?.answer.length === 0 && t("field.fname")}{" "}
                  {
                    questions?.basicInfo?.questions.find((q) => q.index === 1)
                      ?.answer
                  }
                </UpdateQuestionWrapper>
              </span>
              {/* Last Name */}
              <span className="last-name">
                <UpdateQuestionWrapper className="last-name">
                  <UpdateQuestion
                    key={JSON.stringify(questions)}
                    section="basicInfo"
                    index={2}
                    title="Edit Last Name"
                    questions={questions}
                    setQuestions={setQuestions}
                  />
                  {questions?.basicInfo?.questions.find((q) => q.index === 2)
                    ?.answer.length === 0 && t("field.lname")}
                  {" " +
                    questions?.basicInfo?.questions.find((q) => q.index === 2)
                      ?.answer}
                </UpdateQuestionWrapper>
              </span>
              <br />
              {/* Title */}
              <UpdateQuestionWrapper className="title">
                <UpdateQuestion
                  key={JSON.stringify(questions)}
                  section="basicInfo"
                  index={3}
                  title="Edit Title"
                  questions={questions}
                  setQuestions={setQuestions}
                />
                <SubSectionHeading>
                  {questions?.basicInfo?.questions.find((q) => q.index === 3)
                    ?.answer.length === 0 && t("field.title")}
                  {
                    questions?.basicInfo?.questions.find((q) => q.index === 3)
                      ?.answer
                  }
                </SubSectionHeading>
              </UpdateQuestionWrapper>
            </div>
          </div>
          <div className="contact-info div-col col2">
            {/* Email */}
            <UpdateQuestionWrapper
              className="email margin-3"
              removed={
                questions?.basicInfo?.questions.find((q) => q.index === 9)
                  ?.removed
              }
              underline={true}
            >
              <span className="email">
                <MailOutlined /> {t("label.email")}:{" "}
              </span>
              <span className="email-val">
                <UpdateQuestion
                  key={JSON.stringify(questions)}
                  section="basicInfo"
                  index={9}
                  title="Edit Email"
                  questions={questions}
                  setQuestions={setQuestions}
                />
                <span>
                  {
                    questions?.basicInfo?.questions.find((q) => q.index === 9)
                      ?.answer
                  }
                </span>
              </span>
            </UpdateQuestionWrapper>

            {/* Phone */}
            <UpdateQuestionWrapper
              className="phone margin-3"
              removed={
                questions?.basicInfo?.questions.find((q) => q.index === 8)
                  ?.removed
              }
              underline={true}
            >
              <span className="phone">
                <PhoneOutlined /> {t("label.phone")}:{" "}
              </span>
              <UpdateQuestion
                key={JSON.stringify(questions)}
                section="basicInfo"
                index={8}
                title="Edit Phone Number"
                questions={questions}
                setQuestions={setQuestions}
              />
              <span className="phone-val">
                {
                  questions?.basicInfo?.questions.find((q) => q.index === 8)
                    ?.answer
                }
              </span>
            </UpdateQuestionWrapper>

            {/* LinkedIn */}
            <UpdateQuestionWrapper
              className="linkedin margin-3"
              removed={
                questions?.basicInfo?.questions.find((q) => q.index === 10)
                  ?.removed
              }
              underline={true}
            >
              <span className="linkedIn">
                <LinkedinOutlined /> {t("label.linkedin")}:{" "}
              </span>
              <UpdateQuestion
                key={JSON.stringify(questions)}
                section="basicInfo"
                index={10}
                title="Edit Linkedin profile"
                questions={questions}
                setQuestions={setQuestions}
              />
              <span className="linkedIn-val">
                {
                  questions?.basicInfo?.questions.find((q) => q.index === 10)
                    ?.answer
                }
              </span>
            </UpdateQuestionWrapper>

            {/* Website */}
            <UpdateQuestionWrapper
              className="website margin-3"
              removed={
                questions?.basicInfo?.questions.find((q) => q.index === 11)
                  ?.removed
              }
              underline={true}
            >
              <span className="linkedIn">
                <GlobalOutlined /> {t("label.website")}:{" "}
              </span>
              <UpdateQuestion
                key={JSON.stringify(questions)}
                section="basicInfo"
                index={11}
                title="Edit Website"
                questions={questions}
                setQuestions={setQuestions}
              />
              <span className="linkedIn-val">
                {
                  questions?.basicInfo?.questions.find((q) => q.index === 11)
                    ?.answer
                }
              </span>
            </UpdateQuestionWrapper>
          </div>
        </div>
        {/* Profile Summary */}
        <div
          className="profile-summary-5"
          style={{ backgroundColor: activeColor }}
        >
          <UpdateQuestionWrapper
            className="info-profile"
            removed={
              questions?.basicInfo?.questions.find((q) => q.index === 53)
                ?.removed
            }
            display="block"
            underline={true}
            style={{ margin: 0 }}
          >
            <Spin spinning={isProfileAILoading}>
              <UpdateQuestion
                key={JSON.stringify(questions)}
                section="basicInfo"
                index={53}
                title="Edit Profile Summary"
                questions={questions}
                setQuestions={setQuestions}
                AIField={true}
                isLoading={isProfileAILoading}
                setIsLoading={setIsProfileAILoading}
              />
              {t("section.profileSummary")} {": "}
              <div className="profile-content">
                <p>
                  {
                    questions?.basicInfo?.questions.find((q) => q.index === 53)
                      ?.answer
                  }
                </p>
              </div>
            </Spin>
          </UpdateQuestionWrapper>
        </div>




        <div className="body3">
          <div className="sider3">
            <div className="info-header">
              {/* Skills */}
              <UpdateQuestionWrapper
                className="skill"
                removed={
                  questions?.basicInfo?.questions.find((q) => q.index === 13)
                    ?.removed
                }
              >
                <UpdateQuestion
                  key={JSON.stringify(questions)}
                  section="basicInfo"
                  index={13}
                  title="Edit Skill's"
                  questions={questions}
                  setQuestions={setQuestions}
                />
                {
                  <>
                    <SectionHeading activeColor={activeColor}>
                      <h4>{t("section.skills")}</h4>
                    </SectionHeading>
                    <Space wrap>
                      {questions?.basicInfo?.questions
                        .find((q) => q.index === 13)
                        ?.answer.split(",")
                        .map((skill) => {
                          return skill ? (
                            <Tag
                              color={activeColor}
                              icon={<CheckCircleOutlined />}
                            >
                              {skill}
                            </Tag>
                          ) : null;
                        })}
                    </Space>
                  </>
                }
              </UpdateQuestionWrapper>

              {/* Education */}
              <UpdateSectionWrapper removed={questions["education"]?.removed}>
                <UpdateSection
                  section={"education"}
                  questions={questions}
                  setQuestions={setQuestions}
                />
                <SectionHeading activeColor={activeColor}>
                  {t("section.education")}
                </SectionHeading>
                <div className="info-education">
                  {groupedEducation &&
                    Object.keys(groupedEducation).map((group) => {
                      return (
                        <UpdateItemWrapper keys={group}>
                          <UpdateItem
                            section={"education"}
                            questions={questions}
                            setQuestions={setQuestions}
                            group={group}
                          />
                          <div className="education-content">
                            <div className="education-content more-info">
                              <Row justify={"space-between"} align={"top"}>
                                <Col>
                                  <Row justify={"start"} align={"middle"}>
                                    <Col>
                                      <UpdateQuestionWrapper className="info-position">
                                        <UpdateQuestion
                                          key={JSON.stringify(questions)}
                                          section="education"
                                          index={
                                            groupedEducation[group][1].index
                                          }
                                          title="Edit Profile Summary"
                                          questions={questions}
                                          setQuestions={setQuestions}
                                        />
                                        {groupedEducation[group][1].answer}
                                      </UpdateQuestionWrapper>
                                    </Col>
                                    <Col>
                                      <UpdateQuestionWrapper className="info-college">
                                        <UpdateQuestion
                                          key={JSON.stringify(questions)}
                                          section="education"
                                          index={
                                            groupedEducation[group][2].index
                                          }
                                          title="Edit Profile Summary"
                                          questions={questions}
                                          setQuestions={setQuestions}
                                        />
                                        {groupedEducation[group][2].answer &&
                                          " - "}{" "}
                                        {groupedEducation[group][2].answer}
                                      </UpdateQuestionWrapper>
                                    </Col>
                                  </Row>
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "start",
                                      alignItems: "end",
                                    }}
                                  >
                                    <UpdateQuestionWrapper
                                      style={{
                                        width: "fit-content",
                                        paddingY: 0,
                                      }}
                                    >
                                      <UpdateQuestion
                                        key={JSON.stringify(questions)}
                                        section="education"
                                        index={groupedEducation[group][3].index}
                                        title="Edit Profile Summary"
                                        questions={questions}
                                        setQuestions={setQuestions}
                                      />
                                      <span
                                        style={{
                                          whiteSpace: "nowrap",
                                          textOverflow: "inherit",
                                        }}
                                      >
                                        {groupedEducation[group][3].answer}
                                      </span>
                                    </UpdateQuestionWrapper>
                                    <UpdateQuestionWrapper>
                                      <UpdateQuestion
                                        key={JSON.stringify(questions)}
                                        section="education"
                                        index={groupedEducation[group][0].index}
                                        title="Edit Profile Summary"
                                        questions={questions}
                                        setQuestions={setQuestions}
                                      />
                                      {groupedEducation[group][0].answer && ","}{" "}
                                      <span style={{ fontStyle: "italic" }}>
                                        {groupedEducation[group][0].answer}
                                      </span>
                                    </UpdateQuestionWrapper>
                                  </div>
                                </Col>
                                <Col
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  <span>
                                    <UpdateQuestionWrapper className="info-position">
                                      <UpdateQuestion
                                        key={JSON.stringify(questions)}
                                        section="education"
                                        index={groupedEducation[group][4].index}
                                        title="Edit Profile Summary"
                                        questions={questions}
                                        setQuestions={setQuestions}
                                      />
                                      {groupedEducation[group][4].answer}
                                    </UpdateQuestionWrapper>
                                  </span>
                                  <span>{" - "}</span>
                                  <span>
                                    <UpdateQuestionWrapper
                                      style={{ width: "auto" }}
                                    >
                                      <UpdateQuestion
                                        key={JSON.stringify(questions)}
                                        section="education"
                                        index={groupedEducation[group][5].index}
                                        title="Edit Profile Summary"
                                        questions={questions}
                                        setQuestions={setQuestions}
                                      />
                                      {groupedEducation[group][5].answer}
                                    </UpdateQuestionWrapper>
                                  </span>
                                </Col>
                              </Row>
                            </div>
                          </div>
                        </UpdateItemWrapper>
                      );
                    })}
                </div>
              </UpdateSectionWrapper>

              {/* Language Skills */}
              <UpdateQuestionWrapper
                className="side-menu"
                removed={
                  questions?.basicInfo?.questions.find((q) => q.index === 14)
                    ?.removed
                }
              >
                <UpdateQuestion
                  key={JSON.stringify(questions)}
                  section="basicInfo"
                  index={14}
                  title="Edit Language Skills"
                  questions={questions}
                  setQuestions={setQuestions}
                />
                {
                  <>
                    <SectionHeading activeColor={activeColor}>
                      <h4>{t("section.languageSkills")}</h4>
                    </SectionHeading>
                    <Space direction="vertical">
                      {questions?.basicInfo?.questions
                        .find((q) => q.index === 14)
                        ?.answer.split(",")
                        .map((language, idx) => {
                          return language ? (
                            <span
                              key={language}
                              className="skills-name"
                              style={{ whiteSpace: "nowrap" }}
                            >
                              {language}
                              <br />
                              {questions?.basicInfo?.questions.find(
                                (q) => q.index === 14 + 2 + idx
                              )?.isLanguageRating && (
                                <LangRating
                                  rating={
                                    questions.basicInfo.questions.find(
                                      (q) => q.index === 14 + 2 + idx
                                    )?.answer
                                  }
                                  options={
                                    questions.basicInfo.questions.find(
                                      (q) => q.index === 14 + 2 + idx
                                    )?.options
                                  }
                                />
                              )}
                            </span>
                          ) : null;
                        })}
                    </Space>
                  </>
                }
              </UpdateQuestionWrapper>

              {/* Interests */}
              <UpdateQuestionWrapper
                className="side-menu"
                removed={
                  questions?.basicInfo?.questions.find((q) => q.index === 50)
                    ?.removed
                }
              >
                <UpdateQuestion
                  key={JSON.stringify(questions)}
                  section="basicInfo"
                  index={50}
                  title="Edit Interests"
                  questions={questions}
                  setQuestions={setQuestions}
                />
                {
                  <>
                    <SectionHeading activeColor={activeColor}>
                      <h4>{t("section.interests")}</h4>
                    </SectionHeading>
                    <Space wrap>
                      {questions?.basicInfo?.questions
                        .find((q) => q.index === 50)
                        ?.answer.split(",")
                        .map((interest) => {
                          return interest ? (
                            <Tag
                              color={"purple"}
                              icon={<CheckCircleOutlined />}
                            >
                              {interest}
                            </Tag>
                          ) : null;
                        })}
                    </Space>
                  </>
                }
              </UpdateQuestionWrapper>
            </div>
          </div>

          <div className="content" style={{ padding: "40px" }}>
            {/* Work Experience */}
            <div className="info-profile">
              <UpdateSectionWrapper
                removed={questions["workExperience"]?.removed}
              >
                <UpdateSection
                  section={"workExperience"}
                  questions={questions}
                  setQuestions={setQuestions}
                />
                <Spin spinning={isWorkAILoading}>
                  <SectionHeading activeColor={activeColor}>
                    {t("section.workExperience")}
                  </SectionHeading>
                  <div className="info-experience">
                    {
                      // resumeSelector?.workExp?.map((workExp, idx) => (
                      groupedExperience &&
                        Object.keys(groupedExperience).map((group) => {
                          return (
                            <UpdateItemWrapper keys={group}>
                              <UpdateItem
                                section={"workExperience"}
                                questions={questions}
                                setQuestions={setQuestions}
                                group={group}
                              />
                              <div className="experience-content">
                                <div className="experience-content more-info">
                                  <Row justify={"space-between"} align={"top"}>
                                    <Col>
                                      <Row justify={"center"} align={"middle"}>
                                        <Col>
                                          <UpdateQuestionWrapper className="info-position">
                                            <UpdateQuestion
                                              key={JSON.stringify(questions)}
                                              section="workExperience"
                                              index={
                                                groupedExperience[group][1]
                                                  .index
                                              }
                                              title="Edit Profile Summary"
                                              questions={questions}
                                              setQuestions={setQuestions}
                                            />
                                            {groupedExperience[group][1].answer}
                                          </UpdateQuestionWrapper>
                                        </Col>
                                        <Col>{" - "}</Col>
                                        <Col>
                                          <UpdateQuestionWrapper className="info-company">
                                            <UpdateQuestion
                                              key={JSON.stringify(questions)}
                                              section="workExperience"
                                              index={
                                                groupedExperience[group][0]
                                                  .index
                                              }
                                              title="Edit Profile Summary"
                                              questions={questions}
                                              setQuestions={setQuestions}
                                            />
                                            {groupedExperience[group][0].answer}
                                          </UpdateQuestionWrapper>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col
                                      style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                      }}
                                    >
                                      <span>
                                        <UpdateQuestionWrapper className="info-position">
                                          <UpdateQuestion
                                            key={JSON.stringify(questions)}
                                            section="workExperience"
                                            index={
                                              groupedExperience[group][2].index
                                            }
                                            title="Edit Profile Summary"
                                            questions={questions}
                                            setQuestions={setQuestions}
                                          />
                                          {
                                            groupedExperience[group][2].answer
                                          }
                                        </UpdateQuestionWrapper>
                                      </span>
                                      <span>{" - "}</span>
                                      <span>
                                        <UpdateQuestionWrapper className="info-position">
                                          <UpdateQuestion
                                            key={JSON.stringify(questions)}
                                            section="workExperience"
                                            index={
                                              groupedExperience[group][3].index
                                            }
                                            title="Edit Profile Summary"
                                            questions={questions}
                                            setQuestions={setQuestions}
                                          />
                                          {
                                            groupedExperience[group][3].answer
                                          }
                                        </UpdateQuestionWrapper>
                                      </span>
                                    </Col>
                                  </Row>
                                </div>
                                <div className="work-description">
                                  <p>
                                    {
                                      <UpdateQuestionWrapper className="info-position">
                                        <UpdateQuestion
                                          key={JSON.stringify(questions)}
                                          section="workExperience"
                                          index={
                                            groupedExperience[group][4].index
                                          }
                                          title="Edit Profile Summary"
                                          questions={questions}
                                          setQuestions={setQuestions}
                                          AIField={true}
                                          isLoading={isWorkAILoading}
                                          setIsLoading={setIsWorkAILoading}
                                          AIType="workSummary"
                                        />
                                        &bull;{" "}
                                        {groupedExperience[group][4].answer}
                                      </UpdateQuestionWrapper>
                                    }
                                  </p>
                                </div>
                              </div>
                            </UpdateItemWrapper>
                          );
                        })
                    }
                  </div>
                </Spin>
              </UpdateSectionWrapper>
            </div>

            {/* Projects */}
            <div className="info-project">
              <UpdateSectionWrapper removed={questions["projects"]?.removed}>
                <UpdateSection
                  section={"projects"}
                  questions={questions}
                  setQuestions={setQuestions}
                />
                <SectionHeading activeColor={activeColor}>
                  {t("section.projects")}
                </SectionHeading>
                <div className="info-project">
                  {groupedProject &&
                    Object.keys(groupedProject).map((group) => {
                      return (
                        <UpdateItemWrapper keys={group}>
                          <UpdateItem
                            section={"projects"}
                            questions={questions}
                            setQuestions={setQuestions}
                            group={group}
                          />
                          <div className="project-content">
                            <div className="project-content more-info">
                              <Row justify={"space-between"} align={"top"}>
                                <Col>
                                  <Row justify={"center"} align={"middle"}>
                                    <Col>
                                      <UpdateQuestionWrapper className="info-position">
                                        <UpdateQuestion
                                          key={JSON.stringify(questions)}
                                          section="projects"
                                          index={groupedProject[group][0].index}
                                          title="Edit Profile Summary"
                                          questions={questions}
                                          setQuestions={setQuestions}
                                        />
                                        <SubSectionHeading>
                                          {
                                            groupedProject[group][0].answer
                                          }
                                        </SubSectionHeading>
                                      </UpdateQuestionWrapper>
                                      <span>
                                        {groupedProject[group][1].answer && " | "}
                                        <UpdateQuestionWrapper className="info-position">
                                          <UpdateQuestion
                                            key={JSON.stringify(questions)}
                                            section="projects"
                                            index={
                                              groupedProject[group][1].index
                                            }
                                            title="Edit Profile Summary"
                                            questions={questions}
                                            setQuestions={setQuestions}
                                          />
                                          <a
                                            style={{ fontStyle: "italic" }}
                                            target="_blank"
                                            rel="noreferrer"
                                            href={
                                              groupedProject[group][1].answer
                                            }
                                          >
                                            {
                                              groupedProject[group][1].answer
                                            }
                                          </a>
                                        </UpdateQuestionWrapper>
                                      </span>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  <span>
                                    <UpdateQuestionWrapper className="info-position">
                                      <UpdateQuestion
                                        key={JSON.stringify(questions)}
                                        section="projects"
                                        index={groupedProject[group][3].index}
                                        title="Edit Profile Summary"
                                        questions={questions}
                                        setQuestions={setQuestions}
                                      />
                                      {groupedProject[group][3].answer}
                                    </UpdateQuestionWrapper>
                                  </span>
                                  <span>{" - "}</span>
                                  <span>
                                    <UpdateQuestionWrapper className="info-position">
                                      <UpdateQuestion
                                        key={JSON.stringify(questions)}
                                        section="projects"
                                        index={groupedProject[group][4].index}
                                        title="Edit Profile Summary"
                                        questions={questions}
                                        setQuestions={setQuestions}
                                      />
                                      {groupedProject[group][4].answer}
                                    </UpdateQuestionWrapper>
                                  </span>
                                </Col>
                              </Row>
                            </div>
                            <div className="college-content">
                              <UpdateQuestionWrapper className="info-position">
                                <UpdateQuestion
                                  key={JSON.stringify(questions)}
                                  section="projects"
                                  index={groupedProject[group][2].index}
                                  title="Edit Profile Summary"
                                  questions={questions}
                                  setQuestions={setQuestions}
                                />
                                &bull; {groupedProject[group][2].answer}
                              </UpdateQuestionWrapper>
                            </div>
                          </div>
                        </UpdateItemWrapper>
                      );
                    })}
                </div>
              </UpdateSectionWrapper>
            </div>

            {/* Certificates */}
            <UpdateQuestionWrapper
              removed={
                questions?.basicInfo?.questions.find((q) => q.index === 51)
                  ?.removed
              }
              display="block"
            >
              <UpdateQuestion
                key={JSON.stringify(questions)}
                section="basicInfo"
                index={51}
                title="Edit Certificates"
                questions={questions}
                setQuestions={setQuestions}
              />{" "}
              {
                <>
                  <SectionHeading activeColor={activeColor}>
                    {t("section.certificates")}
                  </SectionHeading>
                  <br />
                  <Space wrap={true}>
                    {questions?.basicInfo?.questions
                      .find((q) => q.index === 51)
                      ?.answer.split(",")
                      .map((certificate) => {
                        return certificate ? (
                          <span
                            key={certificate}
                            className="skills-name"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            &bull; {certificate}
                          </span>
                        ) : null;
                      })}
                  </Space>
                </>
              }
            </UpdateQuestionWrapper>

            {/* Awards */}
            <UpdateQuestionWrapper
              className="awards"
              removed={
                questions?.basicInfo?.questions.find((q) => q.index === 52)
                  ?.removed
              }
              display="block"
            >
              <UpdateQuestion
                section="basicInfo"
                index={52}
                title="Edit Awards"
                questions={questions}
                setQuestions={setQuestions}
              />
              <SectionHeading activeColor={activeColor}>
                {t("section.awards")}
              </SectionHeading>
              <div className="awards-content">
                <Space wrap>
                  {questions?.basicInfo?.questions
                    .find((q) => q.index === 52)
                    ?.answer?.split(",")
                    .map((award) => {
                      return award ? (
                        <span
                          key={award}
                          className="skills-name"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          &bull; {award}
                        </span>
                      ) : null;
                    })}
                </Space>
              </div>
            </UpdateQuestionWrapper>
          </div>
        </div>
        
      </div>
    </>
  );
}
