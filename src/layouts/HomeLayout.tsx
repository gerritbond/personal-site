import { TypeAnimation } from 'react-type-animation';
import { useContext } from 'react';
import { NavDrawerContext } from '../providers/NavDrawerProvider';

export const HomeLayout = () => {
  const { state: { isNavOpen } } = useContext(NavDrawerContext);

  return (
    <div className="flex flex-grow justify-center items-center">
        <div className="flex flex-col justify-center items-center">
        <span className="text-4xl font-extralight">
            Hey! I'm <span className="text-red-700 font-protest-strike">Gerrit Bond</span>.
        </span>
        {isNavOpen ? null : (
            <TypeAnimation
                className="text-2xl font-mono font-extralight"
                preRenderFirstString={true}
                sequence={[
                        'Pleased to meet you!',
                        2500,
                        'I\'m a software developer,\n\u00a0\u00a0\u00a0engineering manager,\n\u00a0\u00a0\u00a0 & dungeon master.',
                        10000,
                    ]}
                repeat={Infinity}
                speed={30}
                style={{
                    whiteSpace: 'pre-line',
                }}
            />
        )}
        </div>
    </div>
  );
};
