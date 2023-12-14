import { StarWarsPreferenceForm } from '../components/StarWarsPreferenceForm';
import classes from './styles.module.css';

export const HomePage = () => {
  return (
    <div className={classes.card}>
      <h3>My form</h3>
      <StarWarsPreferenceForm />
    </div>
  );
};
