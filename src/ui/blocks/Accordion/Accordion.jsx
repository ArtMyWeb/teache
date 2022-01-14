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

const mockFaq = [
  {
    id: "accounts",
    title: "How many accounts can i create?",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at cupiditate eaque eligendi eum ipsum labore, optio placeat qui quos recusandae voluptates. Accusantium cupiditate deleniti dignissimos ea eaque earum ipsam, iusto, minima neque perspiciatis rerum similique ullam vero? Distinctio esse fugit molestias tempore voluptate. Asperiores doloribus ex nulla odio soluta.",
  },
  {
    id: "classes",
    title: "Can I be a teacher and attend classes at the same time?",
    text: "Firstly you create a customer account. After that, you can register as a teacher and teach your classes. You will be able to switch accounts.",
  },
  {
    id: "accounts2",
    title: "How many accounts can i create?",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at cupiditate eaque eligendi eum ipsum labore, optio placeat qui quos recusandae voluptates. Accusantium cupiditate deleniti dignissimos ea eaque earum ipsam, iusto, minima neque perspiciatis rerum similique ullam vero? Distinctio esse fugit molestias tempore voluptate. Asperiores doloribus ex nulla odio soluta.",
  },
  {
    id: "accounts3",
    title: "How many accounts can i create?",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at cupiditate eaque eligendi eum ipsum labore, optio placeat qui quos recusandae voluptates. Accusantium cupiditate deleniti dignissimos ea eaque earum ipsam, iusto, minima neque perspiciatis rerum similique ullam vero? Distinctio esse fugit molestias tempore voluptate. Asperiores doloribus ex nulla odio soluta.",
  },
  {
    id: "accounts4",
    title: "How many accounts can i create?",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at cupiditate eaque eligendi eum ipsum labore, optio placeat qui quos recusandae voluptates. Accusantium cupiditate deleniti dignissimos ea eaque earum ipsam, iusto, minima neque perspiciatis rerum similique ullam vero? Distinctio esse fugit molestias tempore voluptate. Asperiores doloribus ex nulla odio soluta.",
  },
  {
    id: "accounts5",
    title: "How many accounts can i create?",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at cupiditate eaque eligendi eum ipsum labore, optio placeat qui quos recusandae voluptates. Accusantium cupiditate deleniti dignissimos ea eaque earum ipsam, iusto, minima neque perspiciatis rerum similique ullam vero? Distinctio esse fugit molestias tempore voluptate. Asperiores doloribus ex nulla odio soluta.",
  },
];
const mockFaq2 = [
  {
    id: "classes",
    title: "Can I be a teacher and attend classes at the same time?",
    text: "Firstly you create a customer account. After that, you can register as a teacher and teach your classes. You will be able to switch accounts.",
  },
  {
    id: "accounts",
    title: "How many accounts can i create?",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at cupiditate eaque eligendi eum ipsum labore, optio placeat qui quos recusandae voluptates. Accusantium cupiditate deleniti dignissimos ea eaque earum ipsam, iusto, minima neque perspiciatis rerum similique ullam vero? Distinctio esse fugit molestias tempore voluptate. Asperiores doloribus ex nulla odio soluta.",
  },
  {
    id: "accounts2",
    title: "How many accounts can i create?",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at cupiditate eaque eligendi eum ipsum labore, optio placeat qui quos recusandae voluptates. Accusantium cupiditate deleniti dignissimos ea eaque earum ipsam, iusto, minima neque perspiciatis rerum similique ullam vero? Distinctio esse fugit molestias tempore voluptate. Asperiores doloribus ex nulla odio soluta.",
  },
  {
    id: "accounts3",
    title: "How many accounts can i create?",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at cupiditate eaque eligendi eum ipsum labore, optio placeat qui quos recusandae voluptates. Accusantium cupiditate deleniti dignissimos ea eaque earum ipsam, iusto, minima neque perspiciatis rerum similique ullam vero? Distinctio esse fugit molestias tempore voluptate. Asperiores doloribus ex nulla odio soluta.",
  },
  {
    id: "accounts4",
    title: "How many accounts can i create?",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at cupiditate eaque eligendi eum ipsum labore, optio placeat qui quos recusandae voluptates. Accusantium cupiditate deleniti dignissimos ea eaque earum ipsam, iusto, minima neque perspiciatis rerum similique ullam vero? Distinctio esse fugit molestias tempore voluptate. Asperiores doloribus ex nulla odio soluta.",
  },
  {
    id: "accounts5",
    title: "How many accounts can i create?",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at cupiditate eaque eligendi eum ipsum labore, optio placeat qui quos recusandae voluptates. Accusantium cupiditate deleniti dignissimos ea eaque earum ipsam, iusto, minima neque perspiciatis rerum similique ullam vero? Distinctio esse fugit molestias tempore voluptate. Asperiores doloribus ex nulla odio soluta.",
  },
];

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

const Accordion = () => {
  const [openItems, setOpenItems] = useState([]);
  const [activeTab, setActive] = useState({ users: true, instructors: false });

  const location = useLocation();
  const navigate = useNavigate();
  const { faqtab } = queryString.parse(location.search);

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
            array={activeTab.users ? mockFaq : mockFaq2}
          />
        </AccordionStyled>
      </Container>
    </AccordionWrapper>
  );
};

export default Accordion;
