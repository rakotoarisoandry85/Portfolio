interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      <span className="section-heading-line" aria-hidden="true" />
    </div>
  );
};

export default Title;
