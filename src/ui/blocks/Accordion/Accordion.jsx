import React, { useEffect, useMemo, useState } from "react";
import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AccordionSwitch,
  AccordionBody,
  AccordionItem,
  AccordionStyled,
  AccordionText,
  AccordionTitle,
  AccordionWrapper,
  Title,
  Tabs,
  Tab,
  Header,
} from "./AccordionStyled";
import { routesPath } from "../../../conts/routes";
import { Container } from "../../base/Container";
import { MinusIcon, PlusIcon } from "../../icons";
import { instructorsFaq, usersFaq } from "./faqLists";
import { KeyWords } from "./KeyWords";

const makeOpenItemId = (index, id) => `${index}_${id}`;

const FaqAccordion = ({ openItems, handleItemClick, array }) =>
  useMemo(() => {
    return array.map((item, index) => {
      const open = openItems.includes(makeOpenItemId(index, item.id));
      return (
        <AccordionItem key={item.id} isOpen={open}>
          <AccordionSwitch
            onClick={() => handleItemClick(makeOpenItemId(index, item.id))}
            isOpen={open}
          >
            {open ? <MinusIcon /> : <PlusIcon />}
          </AccordionSwitch>
          <AccordionTitle
            onClick={() => handleItemClick(makeOpenItemId(index, item.id))}
          >
            {item.title}
          </AccordionTitle>
          <AccordionBody isOpen={open}>
            <AccordionText dangerouslySetInnerHTML={{ __html: item.text }} />
          </AccordionBody>
        </AccordionItem>
      );
    });
  }, [openItems, array]);

const Accordion = ({ filterBySearch }) => {
  const [openItems, setOpenItems] = useState([]);
  const [activeTab, setActive] = useState({ users: true, instructors: false });
  const [usersFAQ, setUsersFAQ] = useState(usersFaq);
  const [instructorsFAQ, setInstructorsFAQ] = useState(instructorsFaq);
  const [filterData, setFilterData] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  const { faqtab } = queryString.parse(location.search);

  const searchStringInArray = (itemOfSearch, keyWord) => {
    for (let item of keyWord) {
      return itemOfSearch.title?.toLowerCase().includes(item);
    }
  };

  const MemoizationDataForFAQ = () => {
    if (filterData.length > 0) {
      return filterData;
    } else {
      return activeTab.users ? usersFAQ : instructorsFAQ;
    }
  };

  const isKeyWordRequired = () => {
    if (activeTab.users) {
      return KeyWords.user.find((el) => el.includes(filterBySearch.join(" ")));
    } else {
      return KeyWords.instructors.find((el) =>
        el.includes(filterBySearch.join(" "))
      );
    }
  };

  useEffect(() => {
    if (filterBySearch?.length > 0) {
      const filterData = [];
      if (isKeyWordRequired()) {
        if (activeTab.users) {
          for (let item of usersFaq) {
            searchStringInArray(item, filterBySearch) && filterData.push(item);
          }
          setUsersFAQ(filterData.length > 0 ? filterData : []);
        } else {
          for (let item of instructorsFaq) {
            searchStringInArray(item, filterBySearch) && filterData.push(item);
          }
          setInstructorsFAQ(filterData.length > 0 ? filterData : []);
        }
      }
    }
  }, [filterBySearch]);

  useEffect(() => {
    if (faqtab === "1") {
      setActive({ users: true, instructors: false });
    } else {
      setActive({ users: false, instructors: true });
    }

    setOpenItems([]);
  }, [setOpenItems, faqtab]);

  const handleItemClick = (itemId) => {
    setOpenItems((prev) => {
      let next;
      if (prev.includes(itemId)) {
        next = [];
      } else {
        next = [itemId];
      }
      return next;
    });
  };

  const handleClickFirstTab = () => {
    setActive({ users: true, instructors: false });
    navigate(`${routesPath.faq}?tab=1`, { replace: true });
  };

  const handleClickSecondtTab = () => {
    setActive({ users: false, instructors: true });
    navigate(`${routesPath.faq}?tab=2`, { replace: true });
  };

  return (
    <AccordionWrapper>
      <Container>
        <Header>
          <Title>Most frequently asked questions</Title>
          <Tabs>
            <Tab active={activeTab.users} onClick={handleClickFirstTab}>
              Users
            </Tab>
            <Tab active={activeTab.instructors} onClick={handleClickSecondtTab}>
              Instructors
            </Tab>
          </Tabs>
        </Header>
        <AccordionStyled>
          <FaqAccordion
            openItems={openItems}
            handleItemClick={handleItemClick}
            array={MemoizationDataForFAQ()}
          />
        </AccordionStyled>
      </Container>
    </AccordionWrapper>
  );
};

export default Accordion;
