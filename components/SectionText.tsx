import { ISectionTextProps } from "../utils/types";

const SectionText = ({ title, paragraphs }: ISectionTextProps): JSX.Element => {
  return (
    <section>
      {title && <h2 className="mb-4 font-Teko text-3xl">{title}</h2>}

      {paragraphs.map((paragraph, index) => (
        <p key={index} className="mb-4">
          {paragraph}
        </p>
      ))}
    </section>
  );
};

export default SectionText;
