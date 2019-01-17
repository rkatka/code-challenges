function* getFibSequence() {
    let twoAgo = 1;
    let oneAgo = 0;

    while (true) {
        let nextValue = twoAgo + oneAgo;
        yield nextValue;
        twoAgo = oneAgo;
        oneAgo = nextValue;
    }
}

// Driver to test
let it = getFibSequence();
for( let i = 0; i < 10; i++ ) {
    console.log(it.next());
}