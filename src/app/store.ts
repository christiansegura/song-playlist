import {BehaviorSubject, distinctUntilChanged, map, Observable} from 'rxjs';
import {State} from './state';

const state: State = {
  playlist: []
}
export class Store {
  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().pipe(distinctUntilChanged());

  get value() {
    return this.subject.value;
  }

  select(name: string): Observable<any>{
    return this.store.pipe(map(x => x[name]));
  }
  set(name: string, state: any) {
    this.subject.next({
      ...this.value, [name]: state
    });
  }
}
