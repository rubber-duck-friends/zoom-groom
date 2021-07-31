import { useLoading, BallTriangle } from '@agney/react-loading';

function Content() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <BallTriangle width="50" />,
  });

  return (
    {/* Accessibility props injected to container */}
    <section {...containerProps}>
      {indicatorEl} {/* renders only while loading */}
    </section>
  );
}

export default Loader