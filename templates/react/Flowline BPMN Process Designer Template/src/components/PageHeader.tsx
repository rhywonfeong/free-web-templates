import Icon from "./Icon";

type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
  icon: string;
};

export default function PageHeader({ eyebrow, title, subtitle, icon }: Props) {
  return (
    <header className="page-header">
      <span className="page-header__icon">
        <Icon name={icon} size={22} />
      </span>
      <div className="page-header__text">
        <span className="page-header__eyebrow">{eyebrow}</span>
        <h1 className="page-header__title">{title}</h1>
        <p className="page-header__subtitle">{subtitle}</p>
      </div>
    </header>
  );
}
