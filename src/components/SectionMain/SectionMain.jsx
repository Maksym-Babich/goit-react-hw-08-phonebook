import PropTypes from 'prop-types';
import {
  HtmlSectionMain,
  TitleMain,
  Content,
} from 'components/SectionMain/SectionMain.styled';

export function SectionMain({ title, children }) {
  return (
    <HtmlSectionMain>
      <TitleMain>{title}</TitleMain>
      <Content>{children}</Content>
    </HtmlSectionMain>
  );
}

SectionMain.propTypes = {
  title: PropTypes.string.isRequired,
};
