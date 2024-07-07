import ScrollTextHighlighter from "./components/ScrollTextHighlighter";

function App() {
  return (
    <div className="App">
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <div style={{width: '300px', padding: '300px'}}>
                <ScrollTextHighlighter
                    fadedText={
                        'If you’re going to try, go all the way.<br /><br />' +
                        'Otherwise, don’t even start.<br /><br />' +
                        'This could mean losing girlfriends, wives, relatives and maybe even your mind.<br /><br />' +
                        'It could mean not eating for three or four days.<br /><br />' +
                        'It could mean freezing on a park bench.<br /><br />' +
                        'It could mean jail.<br /><br />' +
                        'It could mean derision.<br /><br />' +
                        'It could mean mockery—isolation.<br /><br />' +
                        'Isolation is the gift.<br /><br />' +
                        'All the others are a test of your endurance, of how much you really want to do it.<br /><br />' +
                        'And, you’ll do it, despite rejection and the worst odds.<br /><br />' +
                        'And it will be better than anything else you can imagine.<br /><br />' +
                        'If you’re going to try, go all the way.<br /><br />' +
                        'There is no other feeling like that.<br /><br />' +
                        'You will be alone with the gods, and the nights will flame with fire.<br /><br />' +
                        'Do it, do it, do it.<br /><br />' +
                        'Do it.<br /><br />' +
                        'All the way.<br /><br />' +
                        'You will ride life straight to perfect laughter, it’s the only good fight there is.'
                    }

                />
                <div style={{ fontSize: '12px', color: 'gray', textAlign: 'center', marginTop: '200px' }}>
                    "Go All The Way" by Charles Bukowski. © Black Sparrow Press. All rights reserved. Used by permission of HarperCollins Publishers.
                </div>
            </div>

        </div>
    </div>
  );
}

export default App;
